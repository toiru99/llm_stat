---
type: Model
title: QwQ-32B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131072
status: past
size_class: Small
params_b: 32.8
is_reasoning: true
radar:
  knowledge: { s: 36.4, z: -0.51, r: 42.4, estimated: false }  # 전문 지식
  reasoning: { s: 32.9, z: -0.11, r: 48.3, estimated: false }  # 추론
  coding: { s: null, z: null, r: null, estimated: false }  # 코딩
  agentic: { s: null, z: null, r: null, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 30.1, z: -0.85, r: 37.3, estimated: false }  # 긴문맥
  instruction: { s: 37.4, z: -0.54, r: 41.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — QwQ-32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# QwQ-32B

Alibaba · Open · Small(32.8B) · 컨텍스트 131k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 42.4 | -0.51 | 실측 | [[gpqa-diamond]] 59.2929%×0.4, [[humanitys-last-exam]] 7.35%×0.3 |
| 추론 | 48.3 | -0.11 | 실측 | [[gpqa-diamond]] 59.2929%×1.0, [[humanitys-last-exam]] 7.35%×1.0 |
| 코딩 | — | — | 측정 안 됨 | — |
| 에이전트 | — | — | 측정 안 됨 | — |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.3 | -0.85 | 실측 | [[aa-lcr]] 26.6667%×1.0 |
| 지시 따르기 | 41.9 | -0.54 | 실측 | [[ifbench]] 38.7755%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
