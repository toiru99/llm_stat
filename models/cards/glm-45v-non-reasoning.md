---
type: Model
title: GLM-4.5V (Non-reasoning)
creator: Z AI
license: Open
intelligence_index: 7.0
price_blended_usd_1m: 0.72
output_speed_tps: 72.0
context_window: 64000
status: past
size_class: Medium
params_b: 108
is_reasoning: false
radar:
  knowledge: { s: 30.0, z: -0.53, r: 42.0, estimated: false }  # 전문 지식
  reasoning: { s: 19.7, z: -0.75, r: 38.8, estimated: false }  # 추론
  coding: { s: 24.6, z: -0.96, r: 35.6, estimated: false }  # 코딩
  agentic: { s: 15.4, z: -0.84, r: 37.4, estimated: false }  # 에이전트
  trust: { s: 8.2, z: -0.75, r: 38.8, estimated: false }  # 신뢰성
  multimodal: { s: 40.0, z: -1.52, r: 27.2, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.51, r: 27.3, estimated: false }  # 긴문맥
  instruction: { s: 23.9, z: -1.19, r: 32.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.5V (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# GLM-4.5V (Non-reasoning)

Z AI · Open · Medium(108B) · 컨텍스트 64k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $0.6 · 출력 $1.8 · 혼합 $0.72/1M · 72.0 t/s · TTFT 1.77s · 64k ctx` · 가성비 9.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.0 | -0.53 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 57.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 38.8 | -0.75 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 57.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 35.6 | -0.96 | 실측 | [[scicode]] 19.0%×1.0, [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 37.4 | -0.84 | 실측 | [[tau2-bench]] 20.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 38.8 | -0.75 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 27.2 | -1.52 | 실측 | [[mmmu-pro]] 43.0%×1.0 |
| 긴문맥 | 27.3 | -1.51 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 32.1 | -1.19 | 실측 | [[ifbench]] 29.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
