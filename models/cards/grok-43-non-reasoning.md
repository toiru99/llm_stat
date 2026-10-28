---
type: Model
title: Grok 4.3 (non-reasoning)
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.64
output_speed_tps: 91.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 41.5, z: -0.35, r: 44.8, estimated: false }  # 전문 지식
  reasoning: { s: 37.6, z: -0.37, r: 44.4, estimated: false }  # 추론
  coding: { s: 45.2, z: 0.27, r: 54.1, estimated: false }  # 코딩
  agentic: { s: 31.8, z: -0.08, r: 48.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 68.5, z: -0.18, r: 47.3, estimated: false }  # 멀티모달
  long_context: { s: 36.0, z: -0.49, r: 42.7, estimated: false }  # 긴문맥
  instruction: { s: 50.7, z: -0.09, r: 48.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.3 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# Grok 4.3 (non-reasoning)

SpaceXAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 추론, 긴문맥

## 실용 지표
`입력 $1.25 · 출력 $2.5 · 혼합 $0.64/1M · 91.0 t/s · TTFT 0.8s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.8 | -0.35 | 실측 | [[gpqa-diamond]] 66.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 44.4 | -0.37 | 실측 | [[gpqa-diamond]] 66.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 54.1 | +0.27 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 19.0%×0.5 |
| 에이전트 | 48.8 | -0.08 | 실측 | [[gdpval]] 949.0%×1.0, [[tau3-banking]] 8.0%×1.0, [[terminal-bench]] 19.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 47.3 | -0.18 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 42.7 | -0.49 | 실측 | [[aa-lcr]] 32.0%×1.0 |
| 지시 따르기 | 48.7 | -0.09 | 실측 | [[ifbench]] 48.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
