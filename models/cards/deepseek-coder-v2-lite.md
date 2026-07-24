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
  knowledge: { s: 18.3, z: -1.08, r: 33.8, estimated: false }  # 전문 지식
  reasoning: { s: 16.9, z: -0.88, r: 36.8, estimated: false }  # 추론
  coding: { s: 23.3, z: -0.97, r: 35.4, estimated: false }  # 코딩
  agentic: { s: 12.0, z: -0.94, r: 35.9, estimated: true }  # 에이전트
  trust: { s: 22.5, z: -0.24, r: 46.4, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 11.4, z: -1.12, r: 33.3, estimated: true }  # 긴문맥
  instruction: { s: 32.3, z: -0.85, r: 37.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek Coder V2 Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-24
timestamp: 2026-07-24T00:00:00Z
---

# DeepSeek Coder V2 Lite

DeepSeek · Open · Small(16B) · 컨텍스트 128k · 종합지능 **3.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.8 | -1.08 | 실측 | [[gpqa-diamond]] 32.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 36.8 | -0.88 | 실측 | [[gpqa-diamond]] 32.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 35.4 | -0.97 | 실측 | [[scicode]] 14.0%×1.0 |
| 에이전트 | 35.9 | -0.94 | 추정 | (추정) |
| 신뢰성 | 46.4 | -0.24 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 33.3 | -1.12 | 추정 | (추정) |
| 지시 따르기 | 37.2 | -0.85 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
