---
type: Model
title: Qwen3 VL 30B A3B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.375
output_speed_tps: 30.8907332634319
context_window: 256000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 42.5, z: -0.23, r: 46.5, estimated: false }  # 전문 지식
  reasoning: { s: 25.4, z: -0.5, r: 42.5, estimated: false }  # 추론
  coding: { s: 9.2, z: -1.05, r: 34.3, estimated: false }  # 코딩
  agentic: { s: 14.2, z: -1.06, r: 34.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 63.5, z: -0.4, r: 44.0, estimated: false }  # 멀티모달
  long_context: { s: 12.1, z: -1.23, r: 31.5, estimated: true }  # 긴문맥
  instruction: { s: 29.5, z: -1.02, r: 34.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 30B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# Qwen3 VL 30B A3B

Alibaba · Open · Small · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 멀티모달
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.35 · 출력 $0.6 · 혼합 $0.375/1M · 30.8907332634319 t/s · TTFT 1.25393236700004s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.5 | -0.23 | 실측 | [[gpqa-diamond]] 69.4949494949495%×0.4, [[humanitys-last-exam]] 6.302131603336419%×0.3 |
| 추론 | 42.5 | -0.5 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 69.4949494949495%×1.0, [[humanitys-last-exam]] 6.302131603336419%×1.0 |
| 코딩 | 34.3 | -1.05 | 실측 | [[terminal-bench]] 6.06060606060606%×0.5 |
| 에이전트 | 34.1 | -1.06 | 실측 | [[tau2-bench]] 19.0058479532164%×1.0, [[terminal-bench]] 6.06060606060606%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 44.0 | -0.4 | 실측 | [[mmmu-pro]] 62.1387283236994%×1.0 |
| 긴문맥 | 31.5 | -1.23 | 추정 | (추정) |
| 지시 따르기 | 34.7 | -1.02 | 실측 | [[ifbench]] 33.1292517006803%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
