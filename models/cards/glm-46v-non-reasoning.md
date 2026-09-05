---
type: Model
title: GLM-4.6V (Non-reasoning)
creator: Z AI
license: Open
intelligence_index: 5.0
price_blended_usd_1m: 0.36
output_speed_tps: 64.0
context_window: 128000
status: past
size_class: Medium
params_b: 108
is_reasoning: false
radar:
  knowledge: { s: 28.7, z: -0.59, r: 41.2, estimated: false }  # 전문 지식
  reasoning: { s: 19.9, z: -0.73, r: 39.1, estimated: false }  # 추론
  coding: { s: 4.5, z: -0.96, r: 35.5, estimated: false }  # 코딩
  agentic: { s: 17.9, z: -0.75, r: 38.8, estimated: false }  # 에이전트
  trust: { s: 32.0, z: 0.36, r: 55.3, estimated: false }  # 신뢰성
  multimodal: { s: 37.5, z: -1.62, r: 25.7, estimated: false }  # 멀티모달
  long_context: { s: 19.1, z: -0.92, r: 36.2, estimated: false }  # 긴문맥
  instruction: { s: 22.5, z: -1.26, r: 31.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.6V (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# GLM-4.6V (Non-reasoning)

Z AI · Open · Medium(108B) · 컨텍스트 128k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 전문 지식
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.3 · 출력 $0.9 · 혼합 $0.36/1M · 64.0 t/s · TTFT 3.33s · 128k ctx` · 가성비 13.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.2 | -0.59 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 57.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 39.1 | -0.73 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 57.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 35.5 | -0.96 | 실측 | [[terminal-bench]] 3.0%×0.5 |
| 에이전트 | 38.8 | -0.75 | 실측 | [[tau2-bench]] 31.0%×1.0, [[terminal-bench]] 3.0%×1.0 |
| 신뢰성 | 55.3 | +0.36 | 실측 | [[aa-omniscience]] 33.0%×1.0 |
| 멀티모달 | 25.7 | -1.62 | 실측 | [[mmmu-pro]] 42.0%×1.0 |
| 긴문맥 | 36.2 | -0.92 | 실측 | [[aa-lcr]] 17.0%×1.0 |
| 지시 따르기 | 31.1 | -1.26 | 실측 | [[ifbench]] 28.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
