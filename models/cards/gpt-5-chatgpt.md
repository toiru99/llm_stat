---
type: Model
title: GPT-5 (ChatGPT)
creator: OpenAI
license: Proprietary
intelligence_index: 15.0
price_blended_usd_1m: 1.34
output_speed_tps: 160.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 44.3, z: 0.18, r: 52.7, estimated: false }  # 전문 지식
  reasoning: { s: 39.9, z: 0.33, r: 54.9, estimated: false }  # 추론
  coding: { s: 48.8, z: 0.11, r: 51.6, estimated: false }  # 코딩
  agentic: { s: 9.8, z: -1.03, r: 34.6, estimated: false }  # 에이전트
  trust: { s: 17.3, z: -0.5, r: 42.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 84.2, z: 1.05, r: 65.8, estimated: false }  # 긴문맥
  instruction: { s: 46.5, z: -0.24, r: 46.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 (ChatGPT)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-17
timestamp: 2026-07-17T00:00:00Z
---

# GPT-5 (ChatGPT)

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **15.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 추론
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.34/1M · 160.0 t/s · TTFT 0.84s · 128k ctx` · 가성비 11.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.7 | +0.18 | 실측 | [[gpqa-diamond]] 69.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 54.9 | +0.33 | 실측 | [[gpqa-diamond]] 69.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 51.6 | +0.11 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 13.0%×0.5 |
| 에이전트 | 34.6 | -1.03 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 13.0%×1.0 |
| 신뢰성 | 42.5 | -0.5 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.8 | +1.05 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 46.4 | -0.24 | 실측 | [[ifbench]] 45.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
