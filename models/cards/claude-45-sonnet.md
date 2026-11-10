---
type: Model
title: Claude 4.5 Sonnet
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.31
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 58.4, z: 0.55, r: 58.3, estimated: false }  # 전문 지식
  reasoning: { s: 54.0, z: 0.53, r: 57.9, estimated: false }  # 추론
  coding: { s: 60.6, z: 0.77, r: 61.5, estimated: false }  # 코딩
  agentic: { s: 50.2, z: 0.52, r: 57.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 73.0, z: 0.08, r: 51.1, estimated: false }  # 멀티모달
  long_context: { s: 81.5, z: 0.85, r: 62.8, estimated: false }  # 긴문맥
  instruction: { s: 63.5, z: 0.46, r: 56.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4.5 Sonnet
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Claude 4.5 Sonnet

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.3 | +0.55 | 실측 | [[gpqa-diamond]] 83.4%×0.4, [[humanitys-last-exam]] 17.8%×0.3 |
| 추론 | 57.9 | +0.53 | 실측 | [[gpqa-diamond]] 83.4%×1.0, [[humanitys-last-exam]] 17.8%×1.0 |
| 코딩 | 61.5 | +0.77 | 실측 | [[scicode]] 45.7%×1.0, [[terminal-bench]] 35.6%×0.5 |
| 에이전트 | 57.8 | +0.52 | 실측 | [[gdpval]] 915.0%×1.0, [[tau3-banking]] 24.5%×1.0, [[terminal-bench]] 35.6%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.1 | +0.08 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 62.8 | +0.85 | 실측 | [[aa-lcr]] 72.3%×1.0 |
| 지시 따르기 | 56.9 | +0.46 | 실측 | [[ifbench]] 57.3%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
