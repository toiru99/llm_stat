---
type: Model
title: DeepSeek Coder V2 Lite
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 17.1, z: -1.44, r: 28.4, estimated: false }  # 전문 지식
  reasoning: { s: 15.7, z: -1.35, r: 29.8, estimated: false }  # 추론
  coding: { s: 0.5, z: -1.25, r: 31.3, estimated: true }  # 코딩
  agentic: { s: 3.3, z: -1.07, r: 34.0, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 6.5, z: -1.39, r: 29.1, estimated: true }  # 긴문맥
  instruction: { s: 32.2, z: -0.89, r: 36.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek Coder V2 Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# DeepSeek Coder V2 Lite

DeepSeek · Open · Small · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 28.4 | -1.44 | 실측 | [[gpqa-diamond]] 31.9%×0.4, [[humanitys-last-exam]] 5.4%×0.3 |
| 추론 | 29.8 | -1.35 | 실측 | [[gpqa-diamond]] 31.9%×1.0, [[humanitys-last-exam]] 5.4%×1.0 |
| 코딩 | 31.3 | -1.25 | 추정 | (추정) |
| 에이전트 | 34.0 | -1.07 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 29.1 | -1.39 | 추정 | (추정) |
| 지시 따르기 | 36.7 | -0.89 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
