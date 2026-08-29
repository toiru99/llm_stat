---
type: Model
title: Qwen3 VL 32B
creator: Alibaba
license: Open
intelligence_index: 11.0
price_blended_usd_1m: 0.208
output_speed_tps: 63.0
context_window: 256000
status: past
size_class: Small
params_b: 33.4
is_reasoning: false
radar:
  knowledge: { s: 31.3, z: -0.47, r: 43.0, estimated: false }  # 전문 지식
  reasoning: { s: 26.1, z: -0.43, r: 43.6, estimated: false }  # 추론
  coding: { s: 37.4, z: -0.43, r: 43.6, estimated: false }  # 코딩
  agentic: { s: 20.7, z: -0.63, r: 40.5, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.85, r: 37.3, estimated: false }  # 신뢰성
  multimodal: { s: 70.0, z: -0.05, r: 49.3, estimated: false }  # 멀티모달
  long_context: { s: 41.0, z: -0.26, r: 46.1, estimated: false }  # 긴문맥
  instruction: { s: 38.0, z: -0.6, r: 41.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Qwen3 VL 32B

Alibaba · Open · Small(33.4B) · 컨텍스트 256k · 종합지능 **11.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 멀티모달, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.16 · 출력 $0.64 · 혼합 $0.208/1M · 63.0 t/s · TTFT 2.72s · 256k ctx` · 가성비 52.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.0 | -0.47 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 43.6 | -0.43 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 43.6 | -0.43 | 실측 | [[scicode]] 30.0%×1.0, [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 40.5 | -0.63 | 실측 | [[tau2-bench]] 29.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 37.3 | -0.85 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 49.3 | -0.05 | 실측 | [[mmmu-pro]] 64.0%×1.0 |
| 긴문맥 | 46.1 | -0.26 | 실측 | [[aa-lcr]] 34.0%×1.0 |
| 지시 따르기 | 41.0 | -0.6 | 실측 | [[ifbench]] 39.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
