---
type: Model
title: GPT-5.5 (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 4.35
output_speed_tps: None
context_window: 922000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 51.6, z: 0.22, r: 53.3, estimated: false }  # 전문 지식
  reasoning: { s: 47.3, z: 0.2, r: 52.9, estimated: false }  # 추론
  coding: { s: 74.7, z: 1.23, r: 68.5, estimated: false }  # 코딩
  agentic: { s: 51.9, z: 0.57, r: 58.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 75.7, z: 0.21, r: 53.2, estimated: false }  # 멀티모달
  long_context: { s: 72.2, z: 0.57, r: 58.5, estimated: false }  # 긴문맥
  instruction: { s: 47.8, z: -0.23, r: 46.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# GPT-5.5 (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · None t/s · TTFT Nones · 922k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.3 | +0.22 | 실측 | [[gpqa-diamond]] 76.8%×0.4, [[humanitys-last-exam]] 13.7%×0.3 |
| 추론 | 52.9 | +0.2 | 실측 | [[gpqa-diamond]] 76.8%×1.0, [[humanitys-last-exam]] 13.7%×1.0 |
| 코딩 | 68.5 | +1.23 | 실측 | [[terminal-bench]] 49.2%×0.5 |
| 에이전트 | 58.6 | +0.57 | 실측 | [[gdpval]] 978.0%×1.0, [[tau3-banking]] 14.8%×1.0, [[terminal-bench]] 49.2%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 53.2 | +0.21 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 58.5 | +0.57 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 46.6 | -0.23 | 실측 | [[ifbench]] 46.1%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
