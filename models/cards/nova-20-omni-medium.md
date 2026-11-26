---
type: Model
title: Nova 2.0 Omni (medium)
creator: Amazon
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 47.2, z: 0.02, r: 50.3, estimated: false }  # 전문 지식
  reasoning: { s: 28.2, z: -0.35, r: 44.8, estimated: false }  # 추론
  coding: { s: 6.9, z: -1.15, r: 32.7, estimated: false }  # 코딩
  agentic: { s: 44.0, z: -0.11, r: 48.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 63.2, z: -0.42, r: 43.7, estimated: false }  # 멀티모달
  long_context: { s: 67.3, z: 0.29, r: 54.4, estimated: false }  # 긴문맥
  instruction: { s: 75.9, z: 1.06, r: 65.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Omni (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Nova 2.0 Omni (medium)

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 50.3 | +0.02 | 실측 | [[gpqa-diamond]] 75.9596%×0.4, [[humanitys-last-exam]] 6.95088%×0.3 |
| 추론 | 44.8 | -0.35 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 75.9596%×1.0, [[humanitys-last-exam]] 6.95088%×1.0 |
| 코딩 | 32.7 | -1.15 | 실측 | [[terminal-bench]] 4.54545%×0.5 |
| 에이전트 | 48.4 | -0.11 | 실측 | [[tau2-bench]] 80.4094%×1.0, [[terminal-bench]] 4.54545%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 43.7 | -0.42 | 실측 | [[mmmu-pro]] 61.9075%×1.0 |
| 긴문맥 | 54.4 | +0.29 | 실측 | [[aa-lcr]] 59.6667%×1.0 |
| 지시 따르기 | 65.9 | +1.06 | 실측 | [[ifbench]] 66.1905%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
