---
type: Model
title: Qwen3 VL 30B A3B (Reasoning)
creator: Alibaba
license: Open
intelligence_index: 13.0
price_blended_usd_1m: 0.42
output_speed_tps: 109.0
context_window: 256000
status: past
size_class: Small
params_b: 30
is_reasoning: true
radar:
  knowledge: { s: 35.2, z: -0.27, r: 45.9, estimated: false }  # 전문 지식
  reasoning: { s: 29.3, z: -0.26, r: 46.0, estimated: false }  # 추론
  coding: { s: 34.7, z: -0.54, r: 42.0, estimated: false }  # 코딩
  agentic: { s: 13.9, z: -0.9, r: 36.5, estimated: false }  # 에이전트
  trust: { s: 8.2, z: -0.75, r: 38.8, estimated: false }  # 신뢰성
  multimodal: { s: 67.1, z: -0.19, r: 47.2, estimated: false }  # 멀티모달
  long_context: { s: 51.8, z: 0.08, r: 51.1, estimated: false }  # 긴문맥
  instruction: { s: 46.5, z: -0.25, r: 46.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 30B A3B (Reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Qwen3 VL 30B A3B (Reasoning)

Alibaba · Open · Small(30B) · 컨텍스트 256k · 종합지능 **13.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 멀티모달
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.2 · 출력 $2.4 · 혼합 $0.42/1M · 109.0 t/s · TTFT 2.17s · 256k ctx` · 가성비 31.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.9 | -0.27 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 72.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 46.0 | -0.26 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 72.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 42.0 | -0.54 | 실측 | [[scicode]] 29.0%×1.0, [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 36.5 | -0.9 | 실측 | [[tau2-bench]] 20.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 38.8 | -0.75 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 47.2 | -0.19 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 51.1 | +0.08 | 실측 | [[aa-lcr]] 43.0%×1.0 |
| 지시 따르기 | 46.3 | -0.25 | 실측 | [[ifbench]] 45.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
