---
type: Model
title: Grok 4.3 (non-reasoning)
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.64
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 40.3, z: -0.32, r: 45.2, estimated: false }  # 전문 지식
  reasoning: { s: 36.3, z: -0.34, r: 44.9, estimated: false }  # 추론
  coding: { s: 45.2, z: 0.25, r: 53.8, estimated: false }  # 코딩
  agentic: { s: 31.6, z: -0.11, r: 48.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 67.6, z: -0.2, r: 47.1, estimated: false }  # 멀티모달
  long_context: { s: 36.4, z: -0.5, r: 42.5, estimated: false }  # 긴문맥
  instruction: { s: 49.9, z: -0.13, r: 48.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.3 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# Grok 4.3 (non-reasoning)

SpaceXAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 추론, 긴문맥

## 실용 지표
`입력 $1.25 · 출력 $2.5 · 혼합 $0.64/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.2 | -0.32 | 실측 | [[gpqa-diamond]] 65.8%×0.4, [[humanitys-last-exam]] 6.8%×0.3 |
| 추론 | 44.9 | -0.34 | 실측 | [[gpqa-diamond]] 65.8%×1.0, [[humanitys-last-exam]] 6.8%×1.0 |
| 코딩 | 53.8 | +0.25 | 실측 | [[scicode]] 39.4%×1.0, [[terminal-bench]] 18.9%×0.5 |
| 에이전트 | 48.4 | -0.11 | 실측 | [[gdpval]] 949.0%×1.0, [[tau3-banking]] 8.0%×1.0, [[terminal-bench]] 18.9%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 47.1 | -0.2 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 42.5 | -0.5 | 실측 | [[aa-lcr]] 32.3%×1.0 |
| 지시 따르기 | 48.1 | -0.13 | 실측 | [[ifbench]] 47.6%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
