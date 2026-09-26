---
type: Model
title: GLM-4.6 (Non-reasoning)
creator: Z AI
license: Open
intelligence_index: 15.0
price_blended_usd_1m: 0.5835
output_speed_tps: 36.0
context_window: 200000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 34.1, z: -0.36, r: 44.7, estimated: false }  # 전문 지식
  reasoning: { s: 22.8, z: -0.6, r: 41.0, estimated: false }  # 추론
  coding: { s: 43.9, z: 0.31, r: 54.6, estimated: false }  # 코딩
  agentic: { s: 60.9, z: 0.89, r: 63.4, estimated: false }  # 에이전트
  trust: { s: 30.9, z: 0.25, r: 53.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 29.2, z: -0.65, r: 40.2, estimated: false }  # 긴문맥
  instruction: { s: 35.2, z: -0.76, r: 38.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.6 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# GLM-4.6 (Non-reasoning)

Z AI · Open · Large · 컨텍스트 200k · 종합지능 **15.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $0.57 · 출력 $2.2 · 혼합 $0.5835/1M · 36.0 t/s · TTFT 4.56s · 200k ctx` · 가성비 25.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.7 | -0.36 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 63.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 41.0 | -0.6 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 63.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 54.6 | +0.31 | 실측 | [[terminal-bench]] 29.0%×0.5 |
| 에이전트 | 63.4 | +0.89 | 실측 | [[tau2-bench]] 77.0%×1.0, [[terminal-bench]] 29.0%×1.0 |
| 신뢰성 | 53.7 | +0.25 | 실측 | [[aa-omniscience]] 32.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 40.2 | -0.65 | 실측 | [[aa-lcr]] 26.0%×1.0 |
| 지시 따르기 | 38.6 | -0.76 | 실측 | [[ifbench]] 37.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
