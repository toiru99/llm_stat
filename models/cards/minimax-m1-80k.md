---
type: Model
title: MiniMax M1 80k
creator: MiniMax
license: Open
intelligence_index: 18.0
price_blended_usd_1m: 0.715
output_speed_tps: None
context_window: 1000000
status: past
size_class: Large
params_b: 456
is_reasoning: true
radar:
  knowledge: { s: 38.8, z: -0.12, r: 48.1, estimated: false }  # 전문 지식
  reasoning: { s: 28.3, z: -0.32, r: 45.2, estimated: false }  # 추론
  coding: { s: 42.6, z: -0.19, r: 47.1, estimated: false }  # 코딩
  agentic: { s: 19.4, z: -0.65, r: 40.2, estimated: false }  # 에이전트
  trust: { s: 13.8, z: -0.68, r: 39.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 71.1, z: 0.63, r: 59.4, estimated: false }  # 긴문맥
  instruction: { s: 42.3, z: -0.46, r: 43.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax M1 80k
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# MiniMax M1 80k

MiniMax · Open · Large(456B) · 컨텍스트 1M · 종합지능 **18.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.55 · 출력 $2.2 · 혼합 $0.715/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 25.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.1 | -0.12 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 70.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 45.2 | -0.32 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 70.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 47.1 | -0.19 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 3.0%×0.5 |
| 에이전트 | 40.2 | -0.65 | 실측 | [[tau2-bench]] 34.0%×1.0, [[terminal-bench]] 3.0%×1.0 |
| 신뢰성 | 39.7 | -0.68 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.4 | +0.63 | 실측 | [[aa-lcr]] 54.0%×1.0 |
| 지시 따르기 | 43.2 | -0.46 | 실측 | [[ifbench]] 42.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
