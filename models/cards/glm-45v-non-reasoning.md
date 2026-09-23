---
type: Model
title: GLM-4.5V (Non-reasoning)
creator: Z AI
license: Open
intelligence_index: 7.0
price_blended_usd_1m: 0.72
output_speed_tps: 35.0
context_window: 64000
status: past
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 29.3, z: -0.59, r: 41.2, estimated: false }  # 전문 지식
  reasoning: { s: 19.3, z: -0.77, r: 38.4, estimated: false }  # 추론
  coding: { s: 10.6, z: -0.85, r: 37.3, estimated: false }  # 코딩
  agentic: { s: 15.4, z: -0.86, r: 37.1, estimated: false }  # 에이전트
  trust: { s: 8.2, z: -0.81, r: 37.8, estimated: false }  # 신뢰성
  multimodal: { s: 38.4, z: -1.61, r: 25.8, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.54, r: 26.9, estimated: false }  # 긴문맥
  instruction: { s: 23.9, z: -1.23, r: 31.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.5V (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# GLM-4.5V (Non-reasoning)

Z AI · Open · Medium · 컨텍스트 64k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $0.6 · 출력 $1.8 · 혼합 $0.72/1M · 35.0 t/s · TTFT 3.13s · 64k ctx` · 가성비 9.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.2 | -0.59 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 57.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 38.4 | -0.77 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 57.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 37.3 | -0.85 | 실측 | [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 37.1 | -0.86 | 실측 | [[tau2-bench]] 20.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 37.8 | -0.81 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 25.8 | -1.61 | 실측 | [[mmmu-pro]] 43.0%×1.0 |
| 긴문맥 | 26.9 | -1.54 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 31.5 | -1.23 | 실측 | [[ifbench]] 29.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
