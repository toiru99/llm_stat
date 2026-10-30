---
type: Model
title: GLM-4.5V (non-reasoning)
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.377
output_speed_tps: 64.0
context_window: 64000
status: past
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 32.7, z: -0.74, r: 38.9, estimated: false }  # 전문 지식
  reasoning: { s: 29.0, z: -0.76, r: 38.7, estimated: false }  # 추론
  coding: { s: 10.6, z: -0.89, r: 36.7, estimated: false }  # 코딩
  agentic: { s: 10.6, z: -0.81, r: 37.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 38.4, z: -1.68, r: 24.8, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.57, r: 26.5, estimated: false }  # 긴문맥
  instruction: { s: 23.9, z: -1.2, r: 31.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.5V (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# GLM-4.5V (non-reasoning)

Z AI · Open · Medium · 컨텍스트 64k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $0.6 · 출력 $1.8 · 혼합 $0.377/1M · 64.0 t/s · TTFT 3.35s · 64k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.9 | -0.74 | 실측 | [[gpqa-diamond]] 57.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 38.7 | -0.76 | 실측 | [[gpqa-diamond]] 57.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 36.7 | -0.89 | 실측 | [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 37.9 | -0.81 | 실측 | [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 24.8 | -1.68 | 실측 | [[mmmu-pro]] 43.0%×1.0 |
| 긴문맥 | 26.5 | -1.57 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 31.9 | -1.2 | 실측 | [[ifbench]] 29.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
