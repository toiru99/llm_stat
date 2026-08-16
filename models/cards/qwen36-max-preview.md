---
type: Model
title: Qwen3.6 Max Preview
creator: Alibaba
license: Proprietary
intelligence_index: 41.0
price_blended_usd_1m: 1.131
output_speed_tps: 66.0
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 65.7, z: 1.16, r: 67.4, estimated: false }  # 전문 지식
  reasoning: { s: 53.7, z: 0.9, r: 63.5, estimated: false }  # 추론
  coding: { s: 74.4, z: 1.08, r: 66.1, estimated: false }  # 코딩
  agentic: { s: 81.8, z: 1.78, r: 76.7, estimated: false }  # 에이전트
  trust: { s: 60.5, z: 1.47, r: 72.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.7, z: 1.1, r: 66.5, estimated: false }  # 긴문맥
  instruction: { s: 91.5, z: 1.52, r: 72.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 Max Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-16
timestamp: 2026-08-16T00:00:00Z
---

# Qwen3.6 Max Preview

Alibaba · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **41.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 코딩, 추론

## 실용 지표
`입력 $1.3 · 출력 $7.8 · 혼합 $1.131/1M · 66.0 t/s · TTFT 3.21s · 256k ctx` · 가성비 36.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.4 | +1.16 | 실측 | [[aa-omniscience]] 38.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 31.0%×0.3 |
| 추론 | 63.5 | +0.9 | 실측 | [[critpt]] 4.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 31.0%×1.0 |
| 코딩 | 66.1 | +1.08 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 44.0%×0.5 |
| 에이전트 | 76.7 | +1.78 | 실측 | [[tau2-bench]] 96.0%×1.0, [[terminal-bench]] 44.0%×1.0 |
| 신뢰성 | 72.1 | +1.47 | 실측 | [[aa-omniscience]] 54.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.5 | +1.1 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 72.8 | +1.52 | 실측 | [[ifbench]] 77.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
