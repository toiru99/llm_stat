---
type: Model
title: DeepSeek Coder V2 Lite
creator: DeepSeek
license: Open
intelligence_index: 3.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Small
params_b: 16
is_reasoning: false
radar:
  knowledge: { s: 18.1, z: -1.09, r: 33.7, estimated: false }  # 전문 지식
  reasoning: { s: 16.8, z: -0.9, r: 36.5, estimated: false }  # 추론
  coding: { s: 23.3, z: -1.0, r: 35.0, estimated: false }  # 코딩
  agentic: { s: 13.6, z: -0.89, r: 36.7, estimated: true }  # 에이전트
  trust: { s: 23.6, z: -0.12, r: 48.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 12.4, z: -1.13, r: 33.1, estimated: true }  # 긴문맥
  instruction: { s: 30.2, z: -0.97, r: 35.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek Coder V2 Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# DeepSeek Coder V2 Lite

DeepSeek · Open · Small(16B) · 컨텍스트 128k · 종합지능 **3.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.7 | -1.09 | 실측 | [[gpqa-diamond]] 32.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 36.5 | -0.9 | 실측 | [[gpqa-diamond]] 32.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 35.0 | -1.0 | 실측 | [[scicode]] 14.0%×1.0 |
| 에이전트 | 36.7 | -0.89 | 추정 | (추정) |
| 신뢰성 | 48.2 | -0.12 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 33.1 | -1.13 | 추정 | (추정) |
| 지시 따르기 | 35.5 | -0.97 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
