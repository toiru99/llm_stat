---
type: Model
title: Solar Pro 2 (non-reasoning)
creator: Upstage
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 65536
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 32.1, z: -0.73, r: 39.0, estimated: false }  # 전문 지식
  reasoning: { s: 19.0, z: -0.82, r: 37.8, estimated: false }  # 추론
  coding: { s: 6.9, z: -1.12, r: 33.1, estimated: false }  # 코딩
  agentic: { s: 19.5, z: -0.88, r: 36.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.59, r: 26.1, estimated: false }  # 긴문맥
  instruction: { s: 30.4, z: -0.98, r: 35.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Pro 2 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# Solar Pro 2 (non-reasoning)

Upstage · Proprietary · Unknown · 컨텍스트 65k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 65k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.0 | -0.73 | 실측 | [[gpqa-diamond]] 56.0606060606061%×0.4, [[humanitys-last-exam]] 3.7071362372567203%×0.3 |
| 추론 | 37.8 | -0.82 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 56.0606060606061%×1.0, [[humanitys-last-exam]] 3.7071362372567203%×1.0 |
| 코딩 | 33.1 | -1.12 | 실측 | [[terminal-bench]] 4.545454545454549%×0.5 |
| 에이전트 | 36.9 | -0.88 | 실측 | [[tau2-bench]] 31.8713450292398%×1.0, [[terminal-bench]] 4.545454545454549%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.1 | -1.59 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 35.3 | -0.98 | 실측 | [[ifbench]] 33.7414965986395%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
