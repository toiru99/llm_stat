---
type: Model
title: GLM-4.5V (non-reasoning)
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.377
output_speed_tps: 35.1059446844833
context_window: 64000
status: past
size_class: Medium
params_b: 108
is_reasoning: false
radar:
  knowledge: { s: 32.8, z: -0.68, r: 39.8, estimated: false }  # 전문 지식
  reasoning: { s: 19.4, z: -0.78, r: 38.3, estimated: false }  # 추론
  coding: { s: 10.3, z: -1.04, r: 34.5, estimated: false }  # 코딩
  agentic: { s: 15.1, z: -1.13, r: 33.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 37.7, z: -1.72, r: 24.2, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 23.2, z: -1.13, r: 33.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.5V (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# GLM-4.5V (non-reasoning)

Z AI · Open · Medium(108B) · 컨텍스트 64k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 멀티모달, 긴문맥

## 실용 지표
`입력 $0.6 · 출력 $1.8 · 혼합 $0.377/1M · 35.1059446844833 t/s · TTFT 6.7855442974999s · 64k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 39.8 | -0.68 | 실측 | [[gpqa-diamond]] 57.2727%×0.4, [[humanitys-last-exam]] 3.47544%×0.3 |
| 추론 | 38.3 | -0.78 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 57.2727%×1.0, [[humanitys-last-exam]] 3.47544%×1.0 |
| 코딩 | 34.5 | -1.04 | 실측 | [[terminal-bench]] 6.81818%×0.5 |
| 에이전트 | 33.0 | -1.13 | 실측 | [[tau2-bench]] 19.5906%×1.0, [[terminal-bench]] 6.81818%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 24.2 | -1.72 | 실측 | [[mmmu-pro]] 42.7746%×1.0 |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 33.0 | -1.13 | 실측 | [[ifbench]] 28.6395%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
