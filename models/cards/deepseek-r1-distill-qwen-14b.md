---
type: Model
title: DeepSeek R1 Distill Qwen 14B
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Small
params_b: 14
is_reasoning: true
radar:
  knowledge: { s: 27.3, z: -0.95, r: 35.8, estimated: false }  # 전문 지식
  reasoning: { s: 24.4, z: -0.53, r: 42.0, estimated: false }  # 추론
  coding: { s: null, z: null, r: null, estimated: false }  # 코딩
  agentic: { s: null, z: null, r: null, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 11.7, z: -1.41, r: 28.8, estimated: false }  # 긴문맥
  instruction: { s: 14.0, z: -1.51, r: 27.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek R1 Distill Qwen 14B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# DeepSeek R1 Distill Qwen 14B

DeepSeek · Open · Small(14B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 35.8 | -0.95 | 실측 | [[gpqa-diamond]] 48.3838%×0.4, [[humanitys-last-exam]] 4.13%×0.3 |
| 추론 | 42.0 | -0.53 | 실측 | [[gpqa-diamond]] 48.3838%×1.0, [[humanitys-last-exam]] 4.13%×1.0 |
| 코딩 | — | — | 측정 안 됨 | — |
| 에이전트 | — | — | 측정 안 됨 | — |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.8 | -1.41 | 실측 | [[aa-lcr]] 10.3333%×1.0 |
| 지시 따르기 | 27.3 | -1.51 | 실측 | [[ifbench]] 22.1088%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
