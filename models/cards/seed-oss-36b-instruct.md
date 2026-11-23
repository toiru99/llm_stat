---
type: Model
title: Seed-OSS-36B-Instruct
creator: ByteDance Seed
license: Open
intelligence_index: None
price_blended_usd_1m: 0.246
output_speed_tps: 35.3779375438572
context_window: 512000
status: past
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.7, z: -0.03, r: 49.5, estimated: false }  # 전문 지식
  reasoning: { s: 28.2, z: -0.36, r: 44.5, estimated: false }  # 추론
  coding: { s: 10.3, z: -1.01, r: 34.9, estimated: false }  # 코딩
  agentic: { s: 30.1, z: -0.51, r: 42.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 69.2, z: 0.46, r: 56.9, estimated: false }  # 긴문맥
  instruction: { s: 41.8, z: -0.5, r: 42.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Seed-OSS-36B-Instruct
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# Seed-OSS-36B-Instruct

ByteDance Seed · Open · Small · 컨텍스트 512k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.21 · 출력 $0.57 · 혼합 $0.246/1M · 35.3779375438572 t/s · TTFT 6.69471104733885s · 512k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.5 | -0.03 | 실측 | [[gpqa-diamond]] 72.6262626262626%×0.4, [[humanitys-last-exam]] 9.870250231696021%×0.3 |
| 추론 | 44.5 | -0.36 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 72.6262626262626%×1.0, [[humanitys-last-exam]] 9.870250231696021%×1.0 |
| 코딩 | 34.9 | -1.01 | 실측 | [[terminal-bench]] 6.81818181818182%×0.5 |
| 에이전트 | 42.3 | -0.51 | 실측 | [[tau2-bench]] 49.4152046783626%×1.0, [[terminal-bench]] 6.81818181818182%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 56.9 | +0.46 | 실측 | [[aa-lcr]] 61.33333333333329%×1.0 |
| 지시 따르기 | 42.4 | -0.5 | 실측 | [[ifbench]] 41.9047619047619%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
