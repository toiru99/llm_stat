---
type: Model
title: Grok 4.3 (medium)
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.64
output_speed_tps: 80.8788116312653
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 69.3, z: 1.06, r: 65.9, estimated: false }  # 전문 지식
  reasoning: { s: 48.2, z: 0.62, r: 59.4, estimated: false }  # 추론
  coding: { s: 46.0, z: 0.2, r: 53.0, estimated: false }  # 코딩
  agentic: { s: 69.0, z: 0.83, r: 62.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 81.8, z: 0.53, r: 58.0, estimated: false }  # 멀티모달
  long_context: { s: 84.6, z: 0.92, r: 63.8, estimated: false }  # 긴문맥
  instruction: { s: 100.0, z: 1.93, r: 78.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.3 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# Grok 4.3 (medium)

SpaceXAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 멀티모달, 코딩

## 실용 지표
`입력 $1.25 · 출력 $2.5 · 혼합 $0.64/1M · 80.8788116312653 t/s · TTFT 9.95597535578047s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.9 | +1.06 | 실측 | [[gpqa-diamond]] 88.98989898989899%×0.4, [[humanitys-last-exam]] 29.9814643188137%×0.3 |
| 추론 | 59.4 | +0.62 | 실측 | [[critpt]] 4.857142857142859%×1.0, [[gpqa-diamond]] 88.98989898989899%×1.0, [[humanitys-last-exam]] 29.9814643188137%×1.0 |
| 코딩 | 53.0 | +0.2 | 실측 | [[terminal-bench]] 30.303030303030297%×0.5 |
| 에이전트 | 62.5 | +0.83 | 실측 | [[tau2-bench]] 91.2280701754386%×1.0, [[terminal-bench]] 30.303030303030297%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.0 | +0.53 | 실측 | [[mmmu-pro]] 75.8381502890173%×1.0 |
| 긴문맥 | 63.8 | +0.92 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 78.9 | +1.93 | 실측 | [[ifbench]] 83.3333333333333%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
