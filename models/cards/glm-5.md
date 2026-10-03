---
type: Model
title: GLM-5
creator: Z AI
license: Open
intelligence_index: 28.0
price_blended_usd_1m: 0.66
output_speed_tps: 77.0
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 50.8, z: 0.38, r: 55.7, estimated: false }  # 전문 지식
  reasoning: { s: 45.5, z: 0.41, r: 56.2, estimated: false }  # 추론
  coding: { s: 65.2, z: 0.98, r: 64.7, estimated: false }  # 코딩
  agentic: { s: 64.1, z: 0.97, r: 64.5, estimated: false }  # 에이전트
  trust: { s: 64.9, z: 1.78, r: 76.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.4, z: 1.02, r: 65.3, estimated: false }  # 긴문맥
  instruction: { s: 84.5, z: 1.26, r: 68.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-03
timestamp: 2026-10-03T00:00:00Z
---

# GLM-5

Z AI · Open · Unknown · 컨텍스트 200k · 종합지능 **28.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $1.0 · 출력 $3.2 · 혼합 $0.66/1M · 77.0 t/s · TTFT 1.46s · 200k ctx` · 가성비 42.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.7 | +0.38 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 29.0%×0.3 |
| 추론 | 56.2 | +0.41 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 29.0%×1.0 |
| 코딩 | 64.7 | +0.98 | 실측 | [[terminal-bench]] 43.0%×0.5 |
| 에이전트 | 64.5 | +0.97 | 실측 | [[apex-agents]] 14.0%×1.0, [[tau2-bench]] 98.0%×1.0, [[terminal-bench]] 43.0%×1.0 |
| 신뢰성 | 76.8 | +1.78 | 실측 | [[aa-omniscience]] 65.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.3 | +1.02 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 68.9 | +1.26 | 실측 | [[ifbench]] 72.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
