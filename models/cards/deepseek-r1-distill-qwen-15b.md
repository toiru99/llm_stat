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
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 1.2, z: -2.23, r: 16.6, estimated: false }  # 전문 지식
  reasoning: { s: 1.4, z: -1.69, r: 24.7, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.36, r: 29.7, estimated: true }  # 코딩
  agentic: { s: 6.6, z: -1.32, r: 30.1, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 1.9, z: -1.54, r: 27.0, estimated: false }  # 긴문맥
  instruction: { s: 1.5, z: -2.19, r: 17.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek R1 Distill Qwen 1.5B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# DeepSeek R1 Distill Qwen 1.5B

DeepSeek · Open · Tiny · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 16.6 | -2.23 | 실측 | [[gpqa-diamond]] 9.7979797979798%×0.4, [[humanitys-last-exam]] 3.08%×0.3 |
| 추론 | 24.7 | -1.69 | 실측 | [[gpqa-diamond]] 9.7979797979798%×1.0, [[humanitys-last-exam]] 3.08%×1.0 |
| 코딩 | 29.7 | -1.36 | 추정 | (추정) |
| 에이전트 | 30.1 | -1.32 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.0 | -1.54 | 실측 | [[aa-lcr]] 1.66666666666667%×1.0 |
| 지시 따르기 | 17.2 | -2.19 | 실측 | [[ifbench]] 13.1972789115646%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
