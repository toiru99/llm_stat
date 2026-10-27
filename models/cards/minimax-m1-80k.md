---
type: Model
title: MiniMax M1 80k
creator: MiniMax
license: Open
intelligence_index: 12.0
price_blended_usd_1m: 0.715
output_speed_tps: 110.0
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 38.1, z: -0.23, r: 46.5, estimated: false }  # 전문 지식
  reasoning: { s: 27.7, z: -0.43, r: 43.5, estimated: false }  # 추론
  coding: { s: 4.5, z: -1.13, r: 33.1, estimated: false }  # 코딩
  agentic: { s: 4.5, z: -1.04, r: 34.3, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.96, r: 35.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 65.2, z: 0.37, r: 55.5, estimated: false }  # 긴문맥
  instruction: { s: 42.3, z: -0.52, r: 42.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax M1 80k
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# MiniMax M1 80k

MiniMax · Open · Large · 컨텍스트 1M · 종합지능 **12.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.55 · 출력 $2.2 · 혼합 $0.715/1M · 110.0 t/s · TTFT 1.64s · 1M ctx` · 가성비 16.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.5 | -0.23 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 70.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 43.5 | -0.43 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 70.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 33.1 | -1.13 | 실측 | [[terminal-bench]] 3.0%×0.5 |
| 에이전트 | 34.3 | -1.04 | 실측 | [[terminal-bench]] 3.0%×1.0 |
| 신뢰성 | 35.7 | -0.96 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 55.5 | +0.37 | 실측 | [[aa-lcr]] 58.0%×1.0 |
| 지시 따르기 | 42.2 | -0.52 | 실측 | [[ifbench]] 42.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
