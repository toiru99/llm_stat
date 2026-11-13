---
type: Model
title: Claude 3.7 Sonnet (non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.31
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 38.7, z: -0.4, r: 43.9, estimated: false }  # 전문 지식
  reasoning: { s: 34.4, z: -0.44, r: 43.5, estimated: false }  # 추론
  coding: { s: 32.2, z: -0.19, r: 47.1, estimated: false }  # 코딩
  agentic: { s: 32.2, z: -0.1, r: 48.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 60.8, z: -0.54, r: 41.9, estimated: false }  # 멀티모달
  long_context: { s: 58.3, z: 0.15, r: 52.3, estimated: false }  # 긴문맥
  instruction: { s: 44.8, z: -0.35, r: 44.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 3.7 Sonnet (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# Claude 3.7 Sonnet (non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.9 | -0.4 | 실측 | [[gpqa-diamond]] 65.6%×0.4, [[humanitys-last-exam]] 4.2%×0.3 |
| 추론 | 43.5 | -0.44 | 실측 | [[gpqa-diamond]] 65.6%×1.0, [[humanitys-last-exam]] 4.2%×1.0 |
| 코딩 | 47.1 | -0.19 | 실측 | [[terminal-bench]] 21.2%×0.5 |
| 에이전트 | 48.6 | -0.1 | 실측 | [[terminal-bench]] 21.2%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 41.9 | -0.54 | 실측 | [[mmmu-pro]] 60.0%×1.0 |
| 긴문맥 | 52.3 | +0.15 | 실측 | [[aa-lcr]] 51.7%×1.0 |
| 지시 따르기 | 44.7 | -0.35 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
