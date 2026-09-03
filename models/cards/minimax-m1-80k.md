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
  knowledge: { s: 38.4, z: -0.11, r: 48.3, estimated: false }  # 전문 지식
  reasoning: { s: 28.1, z: -0.33, r: 45.1, estimated: false }  # 추론
  coding: { s: 41.3, z: -0.24, r: 46.4, estimated: false }  # 코딩
  agentic: { s: 19.4, z: -0.7, r: 39.5, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.87, r: 36.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 68.7, z: 0.56, r: 58.4, estimated: false }  # 긴문맥
  instruction: { s: 42.3, z: -0.45, r: 43.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax M1 80k
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
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
| 전문 지식 | 48.3 | -0.11 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 70.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 45.1 | -0.33 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 70.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 46.4 | -0.24 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 3.0%×0.5 |
| 에이전트 | 39.5 | -0.7 | 실측 | [[tau2-bench]] 34.0%×1.0, [[terminal-bench]] 3.0%×1.0 |
| 신뢰성 | 36.9 | -0.87 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 58.4 | +0.56 | 실측 | [[aa-lcr]] 57.0%×1.0 |
| 지시 따르기 | 43.3 | -0.45 | 실측 | [[ifbench]] 42.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
