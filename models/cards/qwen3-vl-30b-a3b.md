---
type: Model
title: Qwen3 VL 30B A3B
creator: Alibaba
license: Open
intelligence_index: 4.0
price_blended_usd_1m: 0.26
output_speed_tps: 111.0
context_window: 256000
status: past
size_class: Small
params_b: 30
is_reasoning: false
radar:
  knowledge: { s: 31.7, z: -0.44, r: 43.3, estimated: false }  # 전문 지식
  reasoning: { s: 25.7, z: -0.45, r: 43.3, estimated: false }  # 추론
  coding: { s: 9.1, z: -0.8, r: 37.9, estimated: false }  # 코딩
  agentic: { s: 14.1, z: -0.89, r: 36.6, estimated: false }  # 에이전트
  trust: { s: 4.1, z: -0.96, r: 35.6, estimated: false }  # 신뢰성
  multimodal: { s: 65.3, z: -0.24, r: 46.4, estimated: false }  # 멀티모달
  long_context: { s: 18.4, z: -0.94, r: 35.8, estimated: true }  # 긴문맥
  instruction: { s: 29.6, z: -0.96, r: 35.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 30B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Qwen3 VL 30B A3B

Alibaba · Open · Small(30B) · 컨텍스트 256k · 종합지능 **4.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 멀티모달, 전문 지식
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $0.2 · 출력 $0.8 · 혼합 $0.26/1M · 111.0 t/s · TTFT 2.18s · 256k ctx` · 가성비 15.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.3 | -0.44 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 69.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 43.3 | -0.45 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 69.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 37.9 | -0.8 | 실측 | [[terminal-bench]] 6.0%×0.5 |
| 에이전트 | 36.6 | -0.89 | 실측 | [[tau2-bench]] 19.0%×1.0, [[terminal-bench]] 6.0%×1.0 |
| 신뢰성 | 35.6 | -0.96 | 실측 | [[aa-omniscience]] 6.0%×1.0 |
| 멀티모달 | 46.4 | -0.24 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 35.8 | -0.94 | 추정 | (추정) |
| 지시 따르기 | 35.6 | -0.96 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
