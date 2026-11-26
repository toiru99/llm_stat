---
type: Model
title: DeepSeek R1 Distill Qwen 1.5B
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Tiny
params_b: 1.5
is_reasoning: true
radar:
  knowledge: { s: 1.2, z: -2.22, r: 16.8, estimated: false }  # 전문 지식
  reasoning: { s: 1.4, z: -1.68, r: 24.8, estimated: false }  # 추론
  coding: { s: null, z: null, r: null, estimated: false }  # 코딩
  agentic: { s: null, z: null, r: null, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 1.9, z: -1.71, r: 24.4, estimated: false }  # 긴문맥
  instruction: { s: 1.5, z: -2.03, r: 19.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek R1 Distill Qwen 1.5B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# DeepSeek R1 Distill Qwen 1.5B

DeepSeek · Open · Tiny(1.5B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 긴문맥
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 16.8 | -2.22 | 실측 | [[gpqa-diamond]] 9.79798%×0.4, [[humanitys-last-exam]] 3.08%×0.3 |
| 추론 | 24.8 | -1.68 | 실측 | [[gpqa-diamond]] 9.79798%×1.0, [[humanitys-last-exam]] 3.08%×1.0 |
| 코딩 | — | — | 측정 안 됨 | — |
| 에이전트 | — | — | 측정 안 됨 | — |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 24.4 | -1.71 | 실측 | [[aa-lcr]] 1.66667%×1.0 |
| 지시 따르기 | 19.5 | -2.03 | 실측 | [[ifbench]] 13.1973%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
