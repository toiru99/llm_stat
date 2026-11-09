---
type: Model
title: DeepSeek V3.2 Speciale
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 70.7, z: 0.94, r: 64.1, estimated: false }  # 전문 지식
  reasoning: { s: 67.6, z: 0.99, r: 64.9, estimated: false }  # 추론
  coding: { s: 52.8, z: 0.51, r: 57.7, estimated: false }  # 코딩
  agentic: { s: 52.8, z: 0.63, r: 59.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.9, z: 0.78, r: 61.8, estimated: false }  # 긴문맥
  instruction: { s: 72.8, z: 0.84, r: 62.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.2 Speciale
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# DeepSeek V3.2 Speciale

DeepSeek · Open · Large · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.1 | +0.94 | 실측 | [[gpqa-diamond]] 87.1%×0.4, [[humanitys-last-exam]] 28.7%×0.3 |
| 추론 | 64.9 | +0.99 | 실측 | [[gpqa-diamond]] 87.1%×1.0, [[humanitys-last-exam]] 28.7%×1.0 |
| 코딩 | 57.7 | +0.51 | 실측 | [[terminal-bench]] 34.8%×0.5 |
| 에이전트 | 59.5 | +0.63 | 실측 | [[terminal-bench]] 34.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.8 | +0.78 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 62.6 | +0.84 | 실측 | [[ifbench]] 63.9%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
