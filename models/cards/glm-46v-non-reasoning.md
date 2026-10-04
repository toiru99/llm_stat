---
type: Model
title: GLM-4.6V (non-reasoning)
creator: Z AI
license: Open
intelligence_index: 8.0
price_blended_usd_1m: 0.2742
output_speed_tps: 85.0
context_window: 128000
status: past
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.7, z: -0.64, r: 40.4, estimated: false }  # 전문 지식
  reasoning: { s: 19.9, z: -0.76, r: 38.7, estimated: false }  # 추론
  coding: { s: 4.5, z: -1.09, r: 33.6, estimated: false }  # 코딩
  agentic: { s: 17.9, z: -0.8, r: 38.0, estimated: false }  # 에이전트
  trust: { s: 32.0, z: 0.25, r: 53.8, estimated: false }  # 신뢰성
  multimodal: { s: 37.0, z: -1.72, r: 24.2, estimated: false }  # 멀티모달
  long_context: { s: 19.1, z: -0.98, r: 35.2, estimated: false }  # 긴문맥
  instruction: { s: 22.5, z: -1.32, r: 30.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.6V (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-04
timestamp: 2026-10-04T00:00:00Z
---

# GLM-4.6V (non-reasoning)

Z AI · Open · Medium · 컨텍스트 128k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 전문 지식
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.3 · 출력 $0.9 · 혼합 $0.2742/1M · 85.0 t/s · TTFT 3.7s · 128k ctx` · 가성비 29.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.4 | -0.64 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 57.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 38.7 | -0.76 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 57.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 33.6 | -1.09 | 실측 | [[terminal-bench]] 3.0%×0.5 |
| 에이전트 | 38.0 | -0.8 | 실측 | [[tau2-bench]] 31.0%×1.0, [[terminal-bench]] 3.0%×1.0 |
| 신뢰성 | 53.8 | +0.25 | 실측 | [[aa-omniscience]] 33.0%×1.0 |
| 멀티모달 | 24.2 | -1.72 | 실측 | [[mmmu-pro]] 42.0%×1.0 |
| 긴문맥 | 35.2 | -0.98 | 실측 | [[aa-lcr]] 17.0%×1.0 |
| 지시 따르기 | 30.2 | -1.32 | 실측 | [[ifbench]] 28.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
