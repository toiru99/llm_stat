---
type: Model
title: Qwen3 VL 30B A3B
creator: Alibaba
license: Open
intelligence_index: 9.0
price_blended_usd_1m: 0.42
output_speed_tps: 113.0
context_window: 256000
status: past
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 34.2, z: -0.38, r: 44.2, estimated: false }  # 전문 지식
  reasoning: { s: 28.5, z: -0.36, r: 44.5, estimated: false }  # 추론
  coding: { s: 7.6, z: -0.99, r: 35.2, estimated: false }  # 코딩
  agentic: { s: 13.9, z: -0.95, r: 35.7, estimated: false }  # 에이전트
  trust: { s: 8.2, z: -0.85, r: 37.3, estimated: false }  # 신뢰성
  multimodal: { s: 64.4, z: -0.35, r: 44.8, estimated: false }  # 멀티모달
  long_context: { s: 30.1, z: -0.65, r: 40.2, estimated: true }  # 긴문맥
  instruction: { s: 46.5, z: -0.32, r: 45.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 30B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-05
timestamp: 2026-10-05T00:00:00Z
---

# Qwen3 VL 30B A3B

Alibaba · Open · Small · 컨텍스트 256k · 종합지능 **9.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 멀티모달
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.2 · 출력 $2.4 · 혼합 $0.42/1M · 113.0 t/s · TTFT 2.19s · 256k ctx` · 가성비 21.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.2 | -0.38 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 72.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 44.5 | -0.36 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 72.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 35.2 | -0.99 | 실측 | [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 35.7 | -0.95 | 실측 | [[tau2-bench]] 20.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 37.3 | -0.85 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 44.8 | -0.35 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 40.2 | -0.65 | 추정 | (추정) |
| 지시 따르기 | 45.1 | -0.32 | 실측 | [[ifbench]] 45.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
