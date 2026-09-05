---
type: Model
title: GLM-4.7 (Non-reasoning)
creator: Z AI
license: Open
intelligence_index: 20.0
price_blended_usd_1m: 0.7075
output_speed_tps: 95.0
context_window: 200000
status: past
size_class: Large
params_b: 357
is_reasoning: false
radar:
  knowledge: { s: 37.9, z: -0.14, r: 47.8, estimated: false }  # 전문 지식
  reasoning: { s: 24.6, z: -0.5, r: 42.4, estimated: false }  # 추론
  coding: { s: 45.5, z: 0.47, r: 57.1, estimated: false }  # 코딩
  agentic: { s: 70.2, z: 1.25, r: 68.8, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -0.91, r: 36.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 46.1, z: -0.09, r: 48.6, estimated: false }  # 긴문맥
  instruction: { s: 60.6, z: 0.33, r: 55.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.7 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# GLM-4.7 (Non-reasoning)

Z AI · Open · Large(357B) · 컨텍스트 200k · 종합지능 **20.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.6 · 출력 $2.2 · 혼합 $0.7075/1M · 95.0 t/s · TTFT 1.44s · 200k ctx` · 가성비 28.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.8 | -0.14 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 66.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 42.4 | -0.5 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 66.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 57.1 | +0.47 | 실측 | [[terminal-bench]] 30.0%×0.5 |
| 에이전트 | 68.8 | +1.25 | 실측 | [[tau2-bench]] 94.0%×1.0, [[terminal-bench]] 30.0%×1.0 |
| 신뢰성 | 36.3 | -0.91 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 48.6 | -0.09 | 실측 | [[aa-lcr]] 41.0%×1.0 |
| 지시 따르기 | 55.0 | +0.33 | 실측 | [[ifbench]] 55.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
