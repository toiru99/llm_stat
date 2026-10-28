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
  knowledge: { s: 17.5, z: -1.41, r: 28.9, estimated: false }  # 전문 지식
  reasoning: { s: 16.1, z: -1.34, r: 29.9, estimated: false }  # 추론
  coding: { s: 0.2, z: -1.24, r: 31.4, estimated: true }  # 코딩
  agentic: { s: 3.7, z: -1.05, r: 34.3, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 3.4, z: -1.46, r: 28.1, estimated: true }  # 긴문맥
  instruction: { s: 23.2, z: -1.24, r: 31.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek Coder V2 Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# DeepSeek Coder V2 Lite

DeepSeek · Open · Small · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 28.9 | -1.41 | 실측 | [[gpqa-diamond]] 32.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 29.9 | -1.34 | 실측 | [[gpqa-diamond]] 32.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 31.4 | -1.24 | 추정 | (추정) |
| 에이전트 | 34.3 | -1.05 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.1 | -1.46 | 추정 | (추정) |
| 지시 따르기 | 31.4 | -1.24 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
