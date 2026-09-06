---
type: Model
title: Qwen3.6 Max Preview
creator: Alibaba
license: Proprietary
intelligence_index: 33.0
price_blended_usd_1m: 1.131
output_speed_tps: 54.0
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.1, z: 1.12, r: 66.8, estimated: false }  # 전문 지식
  reasoning: { s: 52.0, z: 0.82, r: 62.3, estimated: false }  # 추론
  coding: { s: 66.7, z: 1.2, r: 68.0, estimated: false }  # 코딩
  agentic: { s: 81.8, z: 1.7, r: 75.5, estimated: false }  # 에이전트
  trust: { s: 53.6, z: 1.37, r: 70.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.29, r: 69.3, estimated: false }  # 긴문맥
  instruction: { s: 91.5, z: 1.62, r: 74.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 Max Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Qwen3.6 Max Preview

Alibaba · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **33.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $1.3 · 출력 $7.8 · 혼합 $1.131/1M · 54.0 t/s · TTFT 3.37s · 256k ctx` · 가성비 29.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.8 | +1.12 | 실측 | [[aa-omniscience]] 38.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 31.0%×0.3 |
| 추론 | 62.3 | +0.82 | 실측 | [[critpt]] 4.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 31.0%×1.0 |
| 코딩 | 68.0 | +1.2 | 실측 | [[terminal-bench]] 44.0%×0.5 |
| 에이전트 | 75.5 | +1.7 | 실측 | [[tau2-bench]] 96.0%×1.0, [[terminal-bench]] 44.0%×1.0 |
| 신뢰성 | 70.6 | +1.37 | 실측 | [[aa-omniscience]] 54.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.3 | +1.29 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 74.3 | +1.62 | 실측 | [[ifbench]] 77.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
