---
type: Model
title: GLM 5V Turbo
creator: Z AI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 56.4, z: 0.47, r: 57.0, estimated: false }  # 전문 지식
  reasoning: { s: 35.3, z: 0.01, r: 50.1, estimated: false }  # 추론
  coding: { s: 49.4, z: 0.28, r: 54.2, estimated: false }  # 코딩
  agentic: { s: 74.4, z: 0.96, r: 64.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 77.7, z: 0.32, r: 54.8, estimated: false }  # 멀티모달
  long_context: { s: 79.3, z: 0.66, r: 59.9, estimated: false }  # 긴문맥
  instruction: { s: 68.8, z: 0.76, r: 61.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM 5V Turbo
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# GLM 5V Turbo

Z AI · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 코딩, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 57.0 | +0.47 | 실측 | [[gpqa-diamond]] 80.9091%×0.4, [[humanitys-last-exam]] 17.1455%×0.3 |
| 추론 | 50.1 | +0.01 | 실측 | [[critpt]] 0.571429%×1.0, [[gpqa-diamond]] 80.9091%×1.0, [[humanitys-last-exam]] 17.1455%×1.0 |
| 코딩 | 54.2 | +0.28 | 실측 | [[terminal-bench]] 32.5758%×0.5 |
| 에이전트 | 64.4 | +0.96 | 실측 | [[tau2-bench]] 98.538%×1.0, [[terminal-bench]] 32.5758%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 54.8 | +0.32 | 실측 | [[mmmu-pro]] 72.7746%×1.0 |
| 긴문맥 | 59.9 | +0.66 | 실측 | [[aa-lcr]] 70.3333%×1.0 |
| 지시 따르기 | 61.4 | +0.76 | 실측 | [[ifbench]] 61.0884%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
